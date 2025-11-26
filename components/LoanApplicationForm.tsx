"use client";

import { useEffect, useState } from "react";
import { HeroCalculatorCard } from "@/components/HeroCalculatorCard";

type Purpose = "boligkob" | "frivaerdi";

type Step = 1 | 2 | 3 | "done";

type PostResponse = {
  id: string;
};

type Suggestion = {
  tekst: string;
  adresse?: {
    id: string;
    vejnavn: string;
    husnr: string;
    postnr: string;
    postnrnavn: string;
  };
};

export function LoanApplicationForm() {
  const [step, setStep] = useState<Step>(1);

  // Step 1 state
  const [purpose, setPurpose] = useState<Purpose>("boligkob");
  const [loanAmount, setLoanAmount] = useState<number>(1_000_000);
  const [secondaryAmount, setSecondaryAmount] = useState<number>(100_000);

  // Step 2 state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Step 3 state
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  // DAWA autocomplete state
  const [addressQuery, setAddressQuery] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState<Suggestion[]>([]);
  const [isSearchingAddress, setIsSearchingAddress] = useState(false);

  // Server state
  const [leadId, setLeadId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch adresse-forslag fra DAWA efter bruger skriver
  useEffect(() => {
    const q = addressQuery.trim();
    if (q.length < 3) {
      setAddressSuggestions([]);
      return;
    }

    const controller = new AbortController();

    async function fetchSuggestions() {
      try {
        setIsSearchingAddress(true);
        const res = await fetch(
          `https://api.dataforsyningen.dk/adresser/autocomplete?q=${encodeURIComponent(
            q
          )}`,
          { signal: controller.signal }
        );
        if (!res.ok) return;
        const data = (await res.json()) as Suggestion[];
        setAddressSuggestions(data.slice(0, 8)); // maks 8 forslag
      } catch (err) {
        if ((err as any).name !== "AbortError") {
          console.error("DAWA error", err);
        }
      } finally {
        setIsSearchingAddress(false);
      }
    }

    const timeout = setTimeout(fetchSuggestions, 250);
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [addressQuery]);

  async function handleSubmitStep2(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name || !email || !phone) {
      setError("Udfyld venligst navn, email og telefon.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/loan-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          purpose,
          loanAmount,
          secondaryAmount,
          name,
          email,
          phone,
        }),
      });

      if (!res.ok) {
        throw new Error("Serverfejl på POST");
      }

      const data: PostResponse = await res.json();
      setLeadId(data.id);
      setStep(3);
    } catch (err) {
      console.error(err);
      setError(
        "Der opstod en fejl ved afsendelse. Prøv igen, eller kontakt os direkte."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleSubmitStep3(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!leadId) {
      setError("Der mangler et id på sagen. Prøv at starte forfra.");
      setStep(1);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/loan-application", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: leadId,
          address,
          description,
        }),
      });

      if (!res.ok) {
        throw new Error("Serverfejl på PATCH");
      }

      setStep("done");
    } catch (err) {
      console.error(err);
      setError(
        "Der opstod en fejl ved opdatering af sagen. Prøv igen eller kontakt os direkte."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  // UI helpers
  function renderStepIndicator() {
    return (
      <div className="flex items-center justify-center gap-2 mb-4 text-xs font-medium text-brand-text/70">
        <StepDot active={step === 1} label="Lån & formål" />
        <span>—</span>
        <StepDot active={step === 2} label="Kontakt" />
        <span>—</span>
        <StepDot active={step === 3} label="Ejendom" />
      </div>
    );
  }

  if (step === "done") {
    return (
      <section
        id="loan-form"
        className="max-w-xl mx-auto p-6 rounded-2xl border border-brand-dark/10 bg-brand-card shadow-sm"
      >
        <h2 className="text-xl font-bold mb-2 text-brand-dark">
          Tak for din henvendelse
        </h2>
        <p className="text-sm text-brand-text/80 mb-2">
          Vi har modtaget dine oplysninger og vender tilbage hurtigst muligt.
        </p>
        <p className="text-xs text-brand-text/60">
          Du kan altid kontakte os direkte, hvis du har supplerende spørgsmål.
        </p>
      </section>
    );
  }

  return (
    <section
      id="loan-form"
      className="max-w-xl mx-auto p-6 rounded-2xl border border-brand-dark/10 bg-white shadow-sm"
    >
      {renderStepIndicator()}

      {error && (
        <div className="mb-3 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
          {error}
        </div>
      )}

      {/* STEP 1 – hero-kalkulatoren */}
      {step === 1 && (
        <div className="space-y-4">
          <p className="text-xs font-semibold text-brand-dark">
            Start med at vælge formål og beløb
          </p>
          <HeroCalculatorCard
            purpose={purpose}
            onPurposeChange={setPurpose}
            loanAmount={loanAmount}
            onLoanAmountChange={setLoanAmount}
            secondaryAmount={secondaryAmount}
            onSecondaryAmountChange={setSecondaryAmount}
            secondaryLabelForBoligkob="Din udbetaling til boligkøb"
            secondaryLabelForFrivaerdi="Ejendommens værdi (anslået)"
            onStart={() => setStep(2)}
          />
        </div>
      )}

      {/* STEP 2 – kontaktoplysninger */}
      {step === 2 && (
        <form onSubmit={handleSubmitStep2} className="space-y-4">
          <div className="text-xs text-brand-text/70 mb-1">
            Trin 2 af 3 – kontaktoplysninger
          </div>
          <div>
            <label className="text-xs font-semibold text-brand-dark mb-1 block">
              Navn
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-brand-dark/20 px-3 py-2 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-brand-dark mb-1 block">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md border border-brand-dark/20 px-3 py-2 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-brand-dark mb-1 block">
              Telefon
            </label>
            <input
              type="tel"
              className="w-full rounded-md border border-brand-dark/20 px-3 py-2 text-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs text-brand-text/70 underline"
            >
              Tilbage
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-xs font-medium text-white hover:bg-brand-primary-soft disabled:opacity-60 transition"
            >
              {isSubmitting
                ? "Sender..."
                : "Videre til ejendomsoplysninger"}
            </button>
          </div>
        </form>
      )}

      {/* STEP 3 – ejendomsoplysninger */}
      {step === 3 && (
        <form onSubmit={handleSubmitStep3} className="space-y-4">
          <div className="text-xs text-brand-text/70 mb-1">
            Trin 3 af 3 – ejendomsoplysninger (valgfrit)
          </div>

          <div>
            <label className="text-xs font-semibold text-brand-dark mb-1 block">
              Adresse på ejendom (valgfrit – med DAWA)
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-brand-dark/20 px-3 py-2 text-sm"
              value={addressQuery}
              onChange={(e) => {
                setAddressQuery(e.target.value);
                setAddress(e.target.value);
              }}
              placeholder="Søg efter adresse..."
            />
            {isSearchingAddress && (
              <div className="mt-1 text-[10px] text-brand-text/60">
                Søger adresser...
              </div>
            )}
            {addressSuggestions.length > 0 && (
              <ul className="mt-1 max-h-40 overflow-auto rounded-md border border-brand-dark/15 bg-white text-xs shadow-sm">
                {addressSuggestions.map((s, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1 cursor-pointer hover:bg-brand-card/70"
                    onClick={() => {
                      setAddress(s.tekst);
                      setAddressQuery(s.tekst);
                      setAddressSuggestions([]);
                    }}
                  >
                    {s.tekst}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label className="text-xs font-semibold text-brand-dark mb-1 block">
              Beskrivelse af sagen (valgfrit)
            </label>
            <textarea
              className="w-full rounded-md border border-brand-dark/20 px-3 py-2 text-sm min-h-[80px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Skriv kort om din situation, fx nuværende lån, ønsker, tidsplan..."
            />
          </div>

          <div className="flex justify-between items-center gap-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs text-brand-text/70 underline"
            >
              Tilbage
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-xs font-medium text-white hover:bg-brand-primary-soft disabled:opacity-60 transition"
            >
              {isSubmitting ? "Sender..." : "Afsend oplysninger"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

function StepDot({ active, label }: { active: boolean; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <span
        className={`inline-block h-2 w-2 rounded-full ${
          active ? "bg-brand-primary" : "bg-brand-dark/20"
        }`}
      />
      <span className="hidden sm:inline text-[11px] text-brand-text/70">
        {label}
      </span>
    </div>
  );
}

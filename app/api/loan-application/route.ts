import { NextRequest, NextResponse } from "next/server";

// Tænk på dette som en "facade".
// Senere kan du herinde kalde din egen backend-API med fetch til fx https://api.danskboliglaan.dk/...

// POST = step 2 (opret lead / sag)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Her kan du validere data, fx:
    // if (!body.name || !body.email) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    // TODO: kald din egen backend api her:
    // const res = await fetch(process.env.BACKEND_API_URL + "/loan-application", { ... })

    // For nu: vi faker et id og returnerer det
    const fakeId = crypto.randomUUID();

    return NextResponse.json(
      {
        id: fakeId,
        received: body,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/loan-application error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// PATCH = step 3 (opdater med adresse + beskrivelse)
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, address, description } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    // TODO: kald din backend API her med PATCH/PUT
    // await fetch(process.env.BACKEND_API_URL + "/loan-application/" + id, { method: "PATCH", body: JSON.stringify({ address, description }), ... })

    return NextResponse.json(
      {
        ok: true,
        updated: { id, address, description },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("PATCH /api/loan-application error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

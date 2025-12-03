import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { cn } from '@/lib/utils'

const team = [
  {
    name: 'Rasmus Bundgaard',
    position: 'Driftsdirektør, Cand. Jur.',
    email: 'test@test.dk',
  },
  {
    name: 'Joan Dalgaard',
    position: 'Jur. assistent Direktionssekretær',
    email: 'test@test.dk',
  },
  {
    name: 'Marrica Dahl Christensen',
    position: 'Driftsdirektør, Cand. Jur.',
    email: 'test@test.dk',
  },
  {
    name: 'Frederik Holm Wester',
    position: 'Driftsdirektør, Cand. Jur.',
    email: 'test@test.dk',
  },
  {
    name: 'Kasper Helløe Vincent Larsen',
    position: 'Driftsdirektør, Cand. Jur.',
    email: 'test@test.dk',
  },
  {
    name: 'Christian Skafdrup Hellesen',
    position: 'Business Analyst Finansøkonom AK',
    email: 'test@test.dk',
  },
  {
    name: 'William Snedevig',
    position: 'Business Analyst Stud. Cand. merc',
    email: 'test@test.dk',
  },
  {
    name: 'Mikkel Hoffmann Bjarrum',
    position: 'Workflow Opt. Specialist Cand. polit.',
    email: 'test@test.dk',
  },
  {
    name: 'Frederik Rovsing',
    position: 'Koncernchef, CEO Cand. polit',
    email: 'test@test.dk',
  },
]

export function TeamSection({ className }: { className?: string }) {
  return (
    <SectionContainer className={cn('bg-brand-dark py-16 lg:py-32', className)} noPadding={true}>
      <SectionContainerInner>
        <div className="col-span-full 2xl:col-start-3 2xl:col-end-11">
          <div className="text-brand-card mb-16 text-center md:mb-24 lg:mb-32">
            <div className="text-brand-spring mb-4 text-base font-semibold sm:text-2xl">
              Mød teamet bag Dansk Boliglån
            </div>

            <h2 className="mb-6 text-4xl font-medium text-balance lg:text-5xl xl:text-7xl">
              Et erfarent hold med fokus på din virkelighed
            </h2>

            <div className="mx-auto max-w-3xl text-lg leading-relaxed text-balance md:text-xl">
              <p>
                Bag Dansk Boliglån står et team med mange års erfaring inden for
                ejendomsfinansiering, kreditvurdering og økonomisk rådgivning.
              </p>
            </div>
          </div>

          <div className="grid gap-12 text-center sm:grid-cols-2 md:gap-18 xl:grid-cols-3 2xl:gap-x-24 2xl:text-left">
            {team.map((item) => (
              <TeamItem
                key={item.name}
                name={item.name}
                position={item.position}
                email={item.email}
              />
            ))}
          </div>
        </div>
      </SectionContainerInner>
    </SectionContainer>
  )
}

function TeamItem({ name, position, email }: { name: string; position: string; email: string }) {
  return (
    <div className="space-y-4 text-lg md:space-y-5">
      <h3 className="text-brand-spring text-xl font-medium">{name}</h3>
      <p className="text-brand-card">{position}</p>
      <a className="text-brand-card underline hover:no-underline" href={`mailto:${email}`}>
        Send mig en e-mail
      </a>
    </div>
  )
}

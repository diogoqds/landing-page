export type ImageProps = {
  alternativeText: string
  url: string
}
export type ButtonProps = {
  label: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type TechIcon = {
  icon: ImageProps
  title: string
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type Concept = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}
export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
}

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

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
}

export enum SelectedPage {
  Home = "Home",
  Benefits = "benefits",
  OurClasses = "ourClasses",
  ContactUs = "contactus",
}

export interface BenefitType{
  icon: JSX.Element
  title: string
  description:string
}
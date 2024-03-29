import React from 'react'
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  CalendarDaysIcon,
  InboxIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  UsersIcon,
  XMarkIcon,
  CloudIcon,
  BuildingLibraryIcon,
  BugAntIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const solutions = [
  {
    name: "Présentation",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#presentation",
    icon: InboxIcon,
  },
  {
    name: "Produit",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#product",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Prix",
    description: "Your customers' data will be safe and secure.",
    href: "#pricing",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Contact",
    description: "Connect with third-party tools that you're already using.",
    href: "#contact",
    icon: QuestionMarkCircleIcon,
  },
];
const features = [
  {
    name: "Planning",
    description:
      "Tous vos évènements en un seul calendrier. Gérez votre temps.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Ménage",
    description:
      "Définissez des tâches, avec la durée du labeur pour ensuite l'attribuer à un membre de la famille.",
    icon: SparklesIcon,
  },
  {
    name: "Finances",
    description: "Pour toujours avoir un regard sur son budget.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Vos recettes",
    description:
      "L'endroit idéal pour sauvegarder toutes vos recettes de grand-mère.",
    icon: QueueListIcon,
  },
  {
    name: "Mes courses",
    description:
      "Simplifiez l'élaboration de vos listes de courses en un clic !",
    icon: PencilSquareIcon,
  },
  {
    name: "Profil",
    description:
      "Chaque profil est indépendant, mais les parents auront toujours un regard sur leurs enfants ;)",
    icon: UsersIcon,
  },
  {
    name: "Scolarité",
    description:
      "À venir : Notes, Emploi du temps, etc. retrouvez toutes les données de Pronote",
    icon: AcademicCapIcon,
  },
  {
    name: "Santé",
    description:
      "À venir : Un rdv médical ? Un suivi de dossier ? Ou juste sauvegarder les médecins de la famille",
    icon: HeartIcon,
  },
  {
    name: "Drive",
    description:
      "À venir : \"Chéri je ne sais pas où j'ai mis ce document... tu l'as vu ?\" Désormais tous les documents stockés dans un endroit unique et sécurisé.",
    icon: CloudIcon,
  },
  {
    name: "Administration",
    description:
      "À venir : Un trousseau de mot de passe familial, redirection vers les sites utiles du gouvernement, et bien plus encore...",
    icon: BuildingLibraryIcon,
  },
  {
    name: "Social",
    description:
      "À venir : Communiquez avec les autres familles sur des forums, organisez une sortie avec des amis proches ou fouillez dans leurs recettes publiques pour vous inspirer.",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: "Animaux",
    description:
      "À venir : Rdv vétérinaire, alimentation, date de naissance, rappel de vaccin. Ne raté rien sur vos amis poilus.",
    icon: BugAntIcon,
  },
];
const metrics = [
  {
    id: 1,
    stat: "14.99€",
    emphasis: "Prix",
    rest: "de l'abonnement mensuel.",
  },
  {
    id: 2,
    stat: "2h",
    emphasis: "Temps",
    rest: "gagné dans la gestion de votre maison.",
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "Utilisateur satisfait",
    rest: "avec la version complète de l'application.",
  },
  {
    id: 4,
    stat: "12M+",
    emphasis: "Foyers",
    rest: "utilisant l'application au quotidien.",
  },
];
const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analyse", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Perspectives", href: "#" },
  ],
  support: [
    { name: "Tarification", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "À propos", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Emplois", href: "#" },
    { name: "Presse", href: "#" },
    { name: "Partenaires", href: "#" },
  ],
  legal: [
    { name: "Réclamation", href: "#" },
    { name: "Vie privée", href: "#" },
    { name: "Conditions", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props : any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props : any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props : any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props : any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props : any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Index(): JSX.Element {
  return (
    <div className="bg-white">
      <header>
        <Popover className="relative bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between p-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">MyHome</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="images/logo.png"
                  alt=""
                />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              {/* <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-orange-600 to-amber-600 text-white sm:h-12 sm:w-12">
                                  <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover> */}

              <a
                href="#presentation"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Présentation
              </a>
              <a
                href="#product"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Produit
              </a>
              <a
                href="#pricing"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Prix
              </a>
              <a
                href="#contact"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              
              <Link
                to={"/register"}
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Inscription
              </Link>
              <Link
                to={"/login"}
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-amber-300 to-orange-500 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-amber-500 hover:to-orange-700"
              >
                Connexion
              </Link>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/images/logo.png"
                        alt="MyHome"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-orange-600 to-amber-600 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="mt-6">
                    <Link
                      to={"/login"}
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-orange-600 to-amber-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-orange-700 hover:to-amber-700"
                    >
                      Connexion
                    </Link>
                    
                    <Link
                      to={"/register"}
                      className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-orange-600 to-amber-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-orange-700 hover:to-amber-700"
                    >
                      Inscription
                    </Link>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="images\famille.jpg"
                  alt="Family"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-orange-700 mix-blend-multiply" />
              </div>
              <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Bienvenue dans votre</span>
                  <span className="block text-amber-300">FAMILLE</span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-amber-300 sm:max-w-3xl">
                  MyHome est l'outil qui vous permettra de gérer votre famille.
                  Simple et intuitif, organisez vos journées, les repas et ne
                  manquez jamais un évènement.
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <a
                      href="#compagny"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-amber-500 shadow-sm hover:bg-amber-50 sm:px-8"
                    >
                      Qui sommes nous ?
                    </a>
                    <a
                      href="#product"
                      className="flex items-center justify-center rounded-md border border-transparent bg-amber-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                    >
                      Notre logiciel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
            <p className="text-center text-base font-semibold text-gray-500">
              Les entreprises qui nous ont aidé de près comme de loin !
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img className="h-12" src="images/mysql.png" alt="MySql" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="images/glanum.png" alt="Glanum" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="images/esimed.png" alt="Esimed" />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img
                  className="h-12"
                  src="images/alltricks.png"
                  alt="Alltricks"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="images/ovh.png" alt="OVH" />
              </div>
            </div>
          </div>
        </div>

        {/* Pitch of team */}
        <div id="presentation" className="relative overflow-hidden pt-16 pb-32">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      Qui sommes-nous ?
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Jeune start-up composée de deux entrepreneurs, nous avons
                      la vocation de vous fournir un outil vous permettant de
                      considérablement améliorer vos journées.
                    </p>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        &ldquo;Nous souhaitons améliorer le quotidien des foyers.
                        À la reconquête de la gestion de votre temps !&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="images/leo.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text-base font-medium text-gray-700">
                          Léo Vincent - Co-fondateur de MyHome
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="images/Application.png"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div id="product" className="bg-gradient-to-r from-amber-300 to-orange-700">
          <div className="mx-auto max-w-4xl py-16 px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Fonctionnalités de MyHome
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-orange-200">
              Parmi la gamme de fonctionnalité qui vous est proposée, l'une
              d'entre-elle saura vous séduire.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-orange-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div id="pricing" className="relative bg-gray-900">
          <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-base font-semibold">
                <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                  Souscription
                </span>
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                La version payante vous permet d'obtenir beaucoup plus
                d'avantage !
              </p>
              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">
                      {item.stat}
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        {item.emphasis}
                      </span>{" "}
                      {item.rest}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="contact" className="bg-white">
          <div className="mx-auto max-w-4xl py-16 px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">
                Vous avez une question à nous poser ?
              </span>
              <span className="-mb-1 block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text pb-1 text-transparent">
                Trouvez votre réponse sur la FAQ ou par mail.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-amber-300 to-orange-500 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-amber-500 hover:to-orange-700"
              >
                FAQ
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-amber-50 px-4 py-3 text-base font-medium text-amber-500 shadow-sm hover:bg-amber-100"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8 lg:pt-24">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-gray-900">
                    Support
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900">
                    Entreprise
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-gray-900">Juridique</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 xl:mt-0">
              <h3 className="text-base font-medium text-gray-900">
                Souscription à la newsletter
              </h3>
              <p className="mt-4 text-base text-gray-500">
                Les dernières news, mises à jour et promotions vous seront envoyés
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Adresse email
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-amber-500 focus:placeholder-gray-400 focus:outline-none focus:ring-amber-500"
                  placeholder="Entrez votre email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type='button'
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-amber-700 hover:to-orange-700"
                  >
                    Souscription
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
            <div className="flex space-x-6 md:order-2">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
              &copy; 2023 MyHome, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

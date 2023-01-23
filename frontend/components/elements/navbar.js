import { useState } from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import { useRouter } from "next/router"

import { getButtonAppearance } from "utils/button"
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from "utils/types"
import { MdMenu } from "react-icons/md"
import MobileNavMenu from "./mobile-nav-menu"
import ButtonLink from "./button-link"
import NextImage from "./image"
import CustomLink from "./custom-link"
import LocaleSwitch from "../locale-switch"
import { Bars3Icon } from "@heroicons/react/20/solid"

const Navbar = ({ navbar, pageContext }) => {
  const router = useRouter()
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  return (
    <>
      {/* The actual navbar */}
      <header>
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <a className="h-8 w-32">
                  <NextImage width="120" height="33" media={navbar.logo} />
                </a>
              </Link>
            </div>
            <div
              className="navbar-collapse collapse grow items-center px-4 flex-1 hidden lg:inline"
              id="navbarSupportedContentY"
            >
              <ul className="navbar-nav mr-auto justify-end lg:flex lg:flex-row">
                {navbar.links.map((navLink) => (
                  <li key={navLink.id} className={"nav-item"}>
                    <CustomLink link={navLink} locale={router.locale}>
                      <div className="hover:text-gray-900 px-8 py-1 text-secondary">
                        {navLink.text}
                      </div>
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className={"flex"}>
              {/* Locale Switch Mobile */}
              {pageContext.localizedPaths && (
                <div className="md:hidden">
                  <LocaleSwitch pageContext={pageContext} />
                </div>
              )}
              {/* Hamburger menu on mobile */}
              <button
                onClick={() => setMobileMenuIsShown(true)}
                className="p-1 block md:hidden"
              >
                <MdMenu className="h-8 w-auto" />
              </button>
              {/* CTA button on desktop */}
              {navbar.button && (
                <div id="nav-contact-container" className="hidden md:block">
                  <ButtonLink
                    button={navbar.button}
                    appearance={getButtonAppearance(
                      navbar.button.type,
                      "light"
                    )}
                    compact
                    className={"bg-primary"}
                  />
                </div>
              )}
              {/* Locale Switch Desktop */}
              {pageContext.localizedPaths && (
                <div className="hidden lg:block">
                  <LocaleSwitch pageContext={pageContext} />
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/*<nav className="border-gray-200 border-b-2 py-6 sm:py-2">*/}
      {/*  <div className="container flex flex-row items-center justify-between">*/}
      {/*    /!* Content aligned to the left *!/*/}
      {/*    <div className="flex flex-row items-center">*/}
      {/*      <Link href="/">*/}
      {/*        <a className="h-8 w-32">*/}
      {/*          <NextImage width="120" height="33" media={navbar.logo} />*/}
      {/*        </a>*/}
      {/*      </Link>*/}
      {/*      /!* List of links on desktop *!/*/}
      {/*      <div id={"navbar-links"}>*/}
      {/*        <ul className="hidden list-none md:flex flex-row gap-4 items-baseline ml-10">*/}
      {/*          {navbar.links.map((navLink) => (*/}
      {/*            <li key={navLink.id}>*/}
      {/*              <CustomLink link={navLink} locale={router.locale}>*/}
      {/*                <div className="hover:text-gray-900 px-2 py-1 text-secondary">*/}
      {/*                  {navLink.text}*/}
      {/*                </div>*/}
      {/*              </CustomLink>*/}
      {/*            </li>*/}
      {/*          ))}*/}
      {/*        </ul>*/}
      {/*        <Bars3Icon id={"menu-burger"} className={'hidden'} />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="flex">*/}
      {/*      /!* Locale Switch Mobile *!/*/}
      {/*      {pageContext.localizedPaths && (*/}
      {/*        <div className="md:hidden">*/}
      {/*          <LocaleSwitch pageContext={pageContext} />*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*      /!* Hamburger menu on mobile *!/*/}
      {/*      <button*/}
      {/*        onClick={() => setMobileMenuIsShown(true)}*/}
      {/*        className="p-1 block md:hidden"*/}
      {/*      >*/}
      {/*        <MdMenu className="h-8 w-auto" />*/}
      {/*      </button>*/}
      {/*      /!* CTA button on desktop *!/*/}
      {/*      {navbar.button && (*/}
      {/*        <div id="nav-contact-container" className="hidden md:block">*/}
      {/*          <ButtonLink*/}
      {/*            button={navbar.button}*/}
      {/*            appearance={getButtonAppearance(navbar.button.type, "light")}*/}
      {/*            compact*/}
      {/*            className={"bg-primary"}*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*      /!* Locale Switch Desktop *!/*/}
      {/*      {pageContext.localizedPaths && (*/}
      {/*        <div className="hidden md:block">*/}
      {/*          <LocaleSwitch pageContext={pageContext} />*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</nav>*/}

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
        />
      )}
    </>
  )
}

Navbar.propTypes = {
  navbar: PropTypes.shape({
    logo: PropTypes.shape({
      image: mediaPropTypes,
      url: PropTypes.string,
    }),
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  initialLocale: PropTypes.string,
}

export default Navbar

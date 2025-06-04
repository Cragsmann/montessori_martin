'use client'

import React from 'react'
import { CMSLink } from '@/components/Link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import type { Header as HeaderType } from '@/payload-types'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4">
        {navItems.map(({ link, subMenu }, i) => (
          <NavigationMenuItem key={i}>
            {subMenu && subMenu.length > 0 ? (
              <>
                <NavigationMenuTrigger className="cursor-pointer px-0 ">
                  <CMSLink {...link} appearance="inline" className="pointer-events-none" />
                </NavigationMenuTrigger>

                <NavigationMenuContent className="p-4 rounded-lg shadow-md">
                  <ul className="flex flex-col gap-2">
                    {subMenu.map((subItem, j) => (
                      <li key={j}>
                        <NavigationMenuLink asChild>
                          <CMSLink
                            {...subItem.link}
                            appearance="link"
                            className="block px-4 py-2 "
                          />
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <CMSLink {...link} appearance="link" />
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

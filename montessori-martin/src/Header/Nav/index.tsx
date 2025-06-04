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
                  <CMSLink {...link} appearance="inline" className="text-primary" bold />
                </NavigationMenuTrigger>

                <NavigationMenuContent className="p-2 !rounded-md shadow-md ">
                  <ul className="flex flex-col gap-2">
                    {subMenu.map((subItem, j) => (
                      <li key={j}>
                        <NavigationMenuLink asChild>
                          <CMSLink
                            {...subItem.link}
                            appearance="link"
                            className="block px-4 py-2 "
                            bold
                          />
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <CMSLink {...link} appearance="link" bold />
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

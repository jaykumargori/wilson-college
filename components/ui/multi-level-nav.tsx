"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface MenuItem {
  title: string
  href?: string
  items?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "ABOUT US",
    items: [
      { title: "Vision & Mission", href: "/vision-mission" },
      { title: "History", href: "/history" },
      { title: "Principal's Message", href: "/principals-message" },
    ],
  },
  {
    title: "ACADEMICS",
    items: [
      {
        title: "Junior College",
        items: [
          {
            title: "Arts",
            items: [
              { title: "English", href: "/junior-college/arts/english" },
              { title: "Hindi", href: "/junior-college/arts/hindi" },
              { title: "History", href: "/junior-college/arts/history" },
            ],
          },
          {
            title: "Science",
            items: [
              { title: "Physics", href: "/junior-college/science/physics" },
              { title: "Chemistry", href: "/junior-college/science/chemistry" },
              { title: "Biology", href: "/junior-college/science/biology" },
            ],
          },
          {
            title: "Commerce",
            items: [
              { title: "Accounts", href: "/junior-college/commerce/accounts" },
              { title: "Economics", href: "/junior-college/commerce/economics" },
              { title: "Business Studies", href: "/junior-college/commerce/business" },
            ],
          },
        ],
      },
      {
        title: "Degree College",
        items: [
          {
            title: "Arts",
            items: [
              { title: "English Literature", href: "/degree-college/arts/english" },
              { title: "Psychology", href: "/degree-college/arts/psychology" },
              { title: "Sociology", href: "/degree-college/arts/sociology" },
            ],
          },
          {
            title: "Science",
            items: [
              { title: "Physics", href: "/degree-college/science/physics" },
              { title: "Chemistry", href: "/degree-college/science/chemistry" },
              { title: "Mathematics", href: "/degree-college/science/mathematics" },
            ],
          },
          {
            title: "Commerce",
            items: [
              { title: "Banking", href: "/degree-college/commerce/banking" },
              { title: "Finance", href: "/degree-college/commerce/finance" },
              { title: "Marketing", href: "/degree-college/commerce/marketing" },
            ],
          },
        ],
      },
    ],
  },
  { title: "IQAC", href: "/iqac" },
  { title: "NIRF", href: "/nirf" },
  { title: "DBT", href: "/dbt" },
  { title: "ADMISSION", href: "/admission" },
  { title: "FACILITIES", href: "/facilities" },
  { title: "SYLLABUS", href: "/syllabus" },
  { title: "ALUMNI", href: "/alumni" },
  { title: "CONTACT US", href: "/contact" },
]

const DropdownContent = ({ items }: { items: MenuItem[] }) => {
  return (
    <div className="grid w-[400px] gap-3 p-4">
      {items.map((item, index) => (
        <div key={index}>
          {item.items ? (
            <div className="space-y-2">
              <h4 className="font-medium leading-none text-white">{item.title}</h4>
              <div className="space-y-2">
                {item.items.map((subItem, subIndex) => (
                  <div key={subIndex}>
                    {subItem.items ? (
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium leading-none text-gray-300">{subItem.title}</h5>
                        <div className="pl-3 space-y-2">
                          {subItem.items.map((subSubItem, subSubIndex) => (
                            <Link
                              key={subSubIndex}
                              href={subSubItem.href || "#"}
                              className="block text-sm text-gray-400 hover:text-white"
                            >
                              {subSubItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link href={subItem.href || "#"} className="block text-sm text-gray-400 hover:text-white">
                        {subItem.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Link href={item.href || "#"} className="block text-sm text-gray-400 hover:text-white">
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

export default function MultiLevelNav() {
  return (
    <NavigationMenu className="container mx-auto px-4 py-2">
      <NavigationMenuList className="flex-wrap justify-start gap-1">
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.items ? (
              <>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white data-[state=open]:bg-gray-800">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gray-900">
                  <DropdownContent items={item.items} />
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href || "#"} legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white")}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
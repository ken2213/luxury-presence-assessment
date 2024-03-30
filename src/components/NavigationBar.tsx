"use client"

import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import Image from 'next/image'

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { navigationBarTitles } from '@/constants'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import serenoLightLogo from "/public/jhsereno-light.webp"
import { cn } from '@/lib/utils'

const NavigationBar = () => {
  return (
    <div className='py-2 sm:px-10 px-5 flex justify-center items-center'>
        <DefaultNavigationBar />
    </div>
  )
}

const DefaultNavigationBar = () => {
    return (
        <NavigationMenu className='screen-max-width text-main'>
            <NavigationMenuList
                className='hidden gap-x-2 sm:justify-center sm:flex'
            >
                <NavigationMenuItem className='text-[0.9rem] font-semibold'>
                    <NavigationMenuLink 
                    className={navigationMenuTriggerStyle()}
                    >
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[0.9rem] ">
                        About Us
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid grid-cols-1 gap-3 p-4 w-[400px] md:">
                            <ListItem>Meet the team</ListItem>
                            <ListItem>Our communities</ListItem>
                            <ListItem>Meet the team</ListItem>
                            <ListItem>Testimonials</ListItem>

                            {/* <li>Meet the team</li>
                            <li>Our Communities</li> */}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[0.9rem]">
                        Services
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className=" gap-3 p-4 w-[400px]">
                            <ListItem>Search for homes</ListItem>
                            <ListItem>Home valuation</ListItem>
                            <ListItem>Homes across America</ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className='text-[0.9rem] font-semibold'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Contact us
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>

            <Sheet>
                <SheetTrigger>
                    <div className='w-screen sm:w-full flex justify-end pr-2'>
                        <Menu 
                            className='block sm:hidden text-main'
                            size={30}
                        />
                    </div>
                </SheetTrigger>

                <MobileNavigation />
            </Sheet>
        </NavigationMenu>
    )
}

const MobileNavigation = () => {
    return (
        <SheetContent
            side="right"
            className='w-[250px] justify-end px-4 bg-main-50 text-main'
        >
            <div className=' w-full h-full flex flex-col gap-y-10'>
                <div className='w-[150px] pl-2 h-auto flex justify-start items-center bg-main py-4 rounded-sm'>
                    <Image 
                        src={serenoLightLogo}
                        alt='Realtor Logo'
                        className='w-[80%]'
                    />
                </div>

                <div className='flex flex-col py-4 gap-y-4'>
                    {navigationBarTitles.map((navTitle) => (
                        <Link
                            key={navTitle.title}
                            href={`/${navTitle.title}`}
                            className='capitalize text-[0.95rem] flex gap-x-2 py-3 pl-2 font-semibold hover:bg-main-100 transition-all ease-in-out delay-100 rounded-sm'
                        >
                            {navTitle.icon}
                            {navTitle.title}
                        </Link>
                    ))}
                </div>
            </div>
        </SheetContent>
    )
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export default NavigationBar
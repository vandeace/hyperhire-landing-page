import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const components: { title: string }[] = [
  {
    title: "채용",
  },
  {
    title: "해외 개발자 원격 채용",
  },
  {
    title: "외국인 원격 채용 (비개발 직군)",
  },
  {
    title: "한국어 가능 외국인 채용",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 items-center ">
      <div>
        <Image src={"/nav-logo.png"} width={114} height={21} alt="nav-logo" />
      </div>
      <div className="text-white md:flex items-center md:visible hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent hover:text-white">
                채용
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[270px] gap-3">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      className={"text-[#344054]"}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <span className="ml-4">해외 개발자 활용 서비스</span>
      </div>
      <button className="bg-white text-[#4A77FF] py-[6px] px-6 rounded-lg md:visible hidden">
        문의하기
      </button>
    </div>
  );
};

export default Navbar;

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
  );
});
ListItem.displayName = "ListItem";

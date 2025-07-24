"use client"

import type * as React from "react"
import { SearchBar } from "../molecules/SearchBar"
import { Button } from "../atoms/Button"
import { cn } from "../utils"

interface SubNavProps {
  icon: React.ReactNode
  onClick: () => void
  placeholder: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  className?: string
}

export const SubNav: React.FC<SubNavProps> = ({
  icon,
  onClick,
  placeholder,
  searchValue,
  onSearchChange,
  className = "",
}) => {
  return (
    <nav className={cn("flex items-center justify-between p-4 bg-background border-b border-border", className)}>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={onClick}>
          {icon}
        </Button>
      </div>

      <div className="flex-1 max-w-md mx-4">
        <SearchBar placeholder={placeholder} value={searchValue} onChange={onSearchChange} />
      </div>

      <div className="flex items-center space-x-2">{/* Additional nav items can be added here */}</div>
    </nav>
  )
}

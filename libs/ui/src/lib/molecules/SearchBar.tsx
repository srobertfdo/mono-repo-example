"use client"

import type * as React from "react"
import { Search } from "lucide-react"
import { Input } from "../atoms/Input"
import { cn } from "../utils"

interface SearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", value, onChange, className = "" }) => {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="pl-10"
      />
    </div>
  )
}

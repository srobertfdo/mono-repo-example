"use client"

import { SubNav } from "../libs/ui/src/lib/organisms/SubNav"

export default function SyntheticV0PageForDeployment() {
  return <SubNav icon={undefined} onClick={function (): void {
    throw new Error("Function not implemented.")
  } } placeholder={""} />
}
import { ReactNode } from "react";


export default function PublicLayout({children}: {children: ReactNode}) {
  return (
    <div>
      <h1>This is PublicLayout Header</h1>
      {children}
      <h1>This is PublicLayout Footer</h1>
    </div>
  )
}

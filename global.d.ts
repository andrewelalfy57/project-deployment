import type { Row } from "@tanstack/react-table"

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      row?: Row<any>
    }
  }
}


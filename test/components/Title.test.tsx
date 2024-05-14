import React from "react";
import { it, expect, describe } from "vitest"
import { render, screen } from "@testing-library/react"
import Title from "../../src/components/Title"
import "@testing-library/jest-dom/vitest"


describe('Title', () => {
  it('should render with the children', () => {
    render(<Title>My Title</Title>)
    // screen.debug()
    const heading = screen.getByRole('heading', { name: /my title/i })
    expect(heading).toBeInTheDocument()
  })
})

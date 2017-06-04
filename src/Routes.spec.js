import { RouteTo, Paths } from './Routes';

describe("Retrieving app paths", () => {
  it("returns the exactly configured path home", () => {
    Paths.home = "/home";
    expect(RouteTo("home")).toBe("/home")
  })

  it("replaces the placeholders", () => {
    Paths.home = "/foo/:id";
    expect(RouteTo("home", { id: 1 })).toBe("/foo/1")

    Paths.home = "/foo/:id/:bla";
    expect(RouteTo("home", { id: 1, bla: "foo" })).toBe("/foo/1/foo")
  })

  it("doesn't replace the placeholders", () => {
    Paths.home = "/foo/:id";
    expect(RouteTo("home")).toBe("/foo/:id")
  })

  it("raise error when has no path", () => {
    Paths.undefined = undefined;
    expect(() => RouteTo("undefined")).toThrow(new Error("Route path not found: undefined"));
  })
})

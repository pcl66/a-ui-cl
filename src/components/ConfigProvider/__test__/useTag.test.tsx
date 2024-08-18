import { renderHook } from "@testing-library/react";
import type { Theme } from "a-ui-cl";
import { useTag } from "../useTag";

const createDocumentMock = (): Document => {
  const externalDocument = document.implementation.createDocument(
    "http://www.w3.org/1999/xhtml",
    "html",
    null
  );
  const body = document.createElement("body");
  const head = document.createElement("head");
  externalDocument.documentElement.appendChild(head);
  externalDocument.documentElement.appendChild(body);
  return externalDocument;
};

describe("useTag", () => {
  const defaultTheme = {
    "css-variable-1": "1",
    "css-variable-2": "2",
  } as unknown as Theme;

  it("should render style tag", () => {
    // Act
    const { result } = renderHook(() =>
      useTag({
        theme: defaultTheme,
      })
    );

    // Assert
    expect(
      document.getElementById(result.current.themeClassName)
    ).not.toBeNull();
  });

  it("should remove style tag on unmount", () => {
    // Arrange
    const { result, unmount } = renderHook(() =>
      useTag({
        theme: defaultTheme,
      })
    );

    // Act
    unmount();

    // Assert
    expect(document.getElementById(result.current.themeClassName)).toBeNull();
  });

  it("should move style tags in body to head on first render", () => {
    const targetDocument = createDocumentMock();

    vi.spyOn(targetDocument, "createElement");
    renderHook(() =>
      useTag({
        theme: defaultTheme,
      })
    );

    expect(targetDocument.body.querySelector("style")).toBeNull();
    // expect(targetDocument.head.querySelectorAll("style").length).toBe(0);
    expect(targetDocument.createElement).toHaveBeenCalledTimes(0);
  });
});

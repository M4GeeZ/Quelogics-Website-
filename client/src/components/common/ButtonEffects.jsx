import { useEffect } from "react";
import "./buttonEffects.css";

const primarySelector = [
  ".hero-primary-button",
  ".explore-button--primary",
  ".client-reviews-action-row a",
  ".industry-copy a",
  ".button",
  ".mobile-navigation-actions a:last-child",
].join(",");

const secondarySelector = [
  ".hero-secondary-button",
  ".explore-button--ghost",
  ".mobile-navigation-actions a:first-child",
].join(",");

const ButtonEffects = () => {
  useEffect(() => {
    const enhanced = new Map();

    const enhance = (element, variant) => {
      if (!(element instanceof HTMLElement) || enhanced.has(element)) return;

      const moveHighlight = (event) => {
        const bounds = element.getBoundingClientRect();
        element.style.setProperty("--ql-fx-x", `${event.clientX - bounds.left}px`);
        element.style.setProperty("--ql-fx-y", `${event.clientY - bounds.top}px`);
      };

      const resetHighlight = () => {
        element.style.setProperty("--ql-fx-x", "50%");
        element.style.setProperty("--ql-fx-y", "50%");
      };

      element.classList.add("ql-fx-button", `ql-fx-${variant}`);
      element.addEventListener("pointerenter", moveHighlight);
      element.addEventListener("pointermove", moveHighlight);
      element.addEventListener("pointerleave", resetHighlight);
      enhanced.set(element, { moveHighlight, resetHighlight });
    };

    const scan = (root = document) => {
      if (root instanceof Element) {
        if (root.matches(primarySelector)) enhance(root, "primary");
        if (root.matches(secondarySelector)) enhance(root, "secondary");
      }

      if (!(root instanceof Element || root instanceof Document)) return;
      root.querySelectorAll(primarySelector).forEach((element) => enhance(element, "primary"));
      root.querySelectorAll(secondarySelector).forEach((element) => enhance(element, "secondary"));
    };

    scan();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => scan(node));
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      enhanced.forEach(({ moveHighlight, resetHighlight }, element) => {
        element.removeEventListener("pointerenter", moveHighlight);
        element.removeEventListener("pointermove", moveHighlight);
        element.removeEventListener("pointerleave", resetHighlight);
        element.classList.remove("ql-fx-button", "ql-fx-primary", "ql-fx-secondary");
        element.style.removeProperty("--ql-fx-x");
        element.style.removeProperty("--ql-fx-y");
      });
    };
  }, []);

  return null;
};

export default ButtonEffects;

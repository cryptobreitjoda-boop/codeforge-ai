import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("CodeForge editor app", () => {
  it("renders shell and starter file content", () => {
    render(<App />);
    expect(screen.getByText("CodeForge")).toBeInTheDocument();

    const editors = screen.getAllByRole("textbox").filter((el) => el.tagName === "TEXTAREA");
    expect(editors.some((el) => el.value.includes("CodeForge Final"))).toBe(true);
  });

  it("updates file content in editor textarea", async () => {
    const user = userEvent.setup();
    render(<App />);

    const editor = screen
      .getAllByRole("textbox")
      .find((el) => el.tagName === "TEXTAREA" && el.value.includes("CodeForge Final"));

    expect(editor).toBeDefined();
    await user.clear(editor);
    await user.type(editor, "// test edit\nconst status = 'ok';");

    expect(editor.value).toContain("const status = 'ok';");
  });

  it("opens command palette via keyboard shortcut", async () => {
    render(<App />);
    fireEvent.keyDown(window, { key: "k", ctrlKey: true });

    expect(await screen.findByPlaceholderText("Befehl oder Datei suchen...")).toBeInTheDocument();
  });

  it("adds Activity.tsx after AI build command", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByTitle("AI Agent"));
    await user.type(screen.getByPlaceholderText('z.B. "Bau Dashboard"'), "Bau Dashboard");
    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(screen.getByText("Activity.tsx")).toBeInTheDocument();
    });
  });
});

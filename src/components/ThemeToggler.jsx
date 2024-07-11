import { useEffect, useState } from "react"

export default function ThemeToggler() {
    const [darkTheme, setDarkTheme] = useState();

    useEffect(() => {
      let documentRoot = document.querySelector("html");
      darkTheme ? documentRoot.classList.add("dark") : documentRoot.classList.remove("dark");
    }, [darkTheme])

    const changeTheme = () => {
        setDarkTheme(!darkTheme);
    }
  return (
    <div>
        <button onClick={changeTheme}>
            {darkTheme ? "Light" : "Dark"}
        </button>
    </div>
  )
}

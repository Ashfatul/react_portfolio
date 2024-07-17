import { useEffect, useState } from "react"

export default function ThemeToggler() {
    const [darkTheme, setDarkTheme] = useState();

    useEffect(() => {
      let documentRoot = document.querySelector("html");
      darkTheme ? documentRoot.classList.add("light") : documentRoot.classList.remove("light");
    }, [darkTheme])

    const changeTheme = () => {
        setDarkTheme(!darkTheme);
    }
  return (
    <div className="ThemeToggler">
        <button onClick={changeTheme}>
            Theme {darkTheme ? "Dark" : "Light"}
        </button>
    </div>
  )
}

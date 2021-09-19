import { useDarkModeStore } from "../../context/darkmode";
import { darkModeActions } from "../../context/darkmode/actions";
import { HeaderComponent, NavComponent } from "./styles";

const Header = () => {
  const { changeTheme }: any = darkModeActions();
  const { theme } = useDarkModeStore();

  return (
    <HeaderComponent>
      <NavComponent>
        <li>LOGO</li>
        <li>
          <button type="button" onClick={changeTheme}>
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="var(--colors-theme_color)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="5" x2="12" y2="5.01" />
                <line x1="17" y1="7" x2="17" y2="7.01" />
                <line x1="19" y1="12" x2="19" y2="12.01" />
                <line x1="17" y1="17" x2="17" y2="17.01" />
                <line x1="12" y1="19" x2="12" y2="19.01" />
                <line x1="7" y1="17" x2="7" y2="17.01" />
                <line x1="5" y1="12" x2="5" y2="12.01" />
                <line x1="7" y1="7" x2="7" y2="7.01" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="var(--colors-theme_color)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
              </svg>
            )}
          </button>
        </li>
      </NavComponent>
    </HeaderComponent>
  );
};

export { Header };

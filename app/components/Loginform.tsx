import { login, signup } from "../login/actions";
import { Input, } from "@nextui-org/input";

export default function Loginform() {
  return (
    <div className="p-12 w-[90%] lg:w-[600px] rounded-[10px]  border-[1px] border-white drop-shadow-md bg-white/20 self-center mx-auto">
      <h2 className="text-white text-center text-[2.5rem] mb-4">EasyTvPremiumStick</h2>
      <ul className="text-white text-center max-w-[75%] mx-auto mb-6">
        <li className="mb-2">- Einfach schnell eingerichtet.</li>
        <li className="mb-2">- Alle Premiumsender in einer App.</li>
        <li className="mb-2">- Nur 60,€ anstatt 200€ pro Monat</li>
        <li className="mb-2">- schnelle und einfache Einrichtung</li>
      </ul>
      <form>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
          <Input
            id="email"
            type="email"
            label="E-Mail-Adresse"
            name="email"
            className="bg-white rounded-lg"
            required
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
          <Input
            id="password"
            type="password"
            label="Passwort"
            name="password"
            className="bg-white rounded-lg"
          />
        </div>
        <div className="flex gap-4 mb-4">
          <button type="submit" formAction={login} className="btn" >
            Anmelden
          </button>
        </div>
        <a className="text-tuerkis underline text-[12px] text-center w-full cursor-pointer block mt-2">
          Jetzt schnell und einfach registrieren!
        </a>
      </form>
    </div>
  );
}

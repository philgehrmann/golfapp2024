import { login, signup } from "../login/actions";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";

export default function Loginform() {
  return (
    <div className="p-6 lg:w-[600px] rounded-[10px]  border-[1px] border-tuerkis drop-shadow-md bg-white/50 self-center mx-auto">
      <form>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
          <Input
            id="email"
            type="email"
            label="E-Mail-Adresse"
            name="email"
            className=""
            required
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
          <Input
            id="password"
            type="password"
            label="Passwort"
            name="password"
          />
        </div>
        <div className="flex gap-4 mb-4">
          <Button type="submit" formAction={login} fullWidth={true}>
            Anmelden
          </Button>
        </div>
        <a className="text-tuerkis underline text-[12px] text-center w-full cursor-pointer block mt-2">
          Jetzt schnell und einfach registrieren!
        </a>
      </form>
    </div>
  );
}

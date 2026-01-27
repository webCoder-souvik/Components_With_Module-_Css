import { AbilityBuilder, Ability } from "@casl/ability";
import { createContext } from "react";
import { createContextualCan } from "@casl/react";
import { getAbilities } from "./canAbilities";
import { CanType } from "../../Types/CAN/can.types";

const defineAbility = () => {
  const { can, build } = new AbilityBuilder(Ability);
  // actions--> create,delete,update,read
  getAbilities()?.map((ability: CanType) => {
    return can(`${ability.can}`, `${ability?.resourse}`);
  });
  return build();
};

export const ability = defineAbility();

export const AbilityContext = createContext(ability);
export const Can = createContextualCan(AbilityContext.Consumer);

export const abilityFinder = (allowedAbility: string) => {
  return (
    getAbilities()?.find(
      (ability: CanType) => ability?.resourse === allowedAbility
    )?.can ?? ""
  );
};

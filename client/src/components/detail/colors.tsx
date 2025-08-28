import { useState, type FC } from "react";
import { colors as colorsList } from "../../constants";

interface Props {
  colors: string[];
}
const Colors: FC<Props> = ({ colors }) => {
  const [selected, setSelected] = useState<string>("");

  const toggle = (id: string) => {
    setSelected(selected === id ? "" : id);
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Choose Color</h2>

      <div className="flex gap-5">
        {colors.map((id, key) => {
          const color = colorsList.find((i) => i.id == id);

          const isSelected = selected === id;

          return (
            <div
              key={key}
              className={isSelected ? "ring-3 ring-my-blue rounded-full" : ""}
            >
              <div
                onClick={() => toggle(id)}
                className="m-1 size-9 rounded-full cursor-pointer"
                style={{ background: color?.code }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;

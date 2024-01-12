import React, { useState, useMemo } from "react";
import Image from "next/image";
import { IPopupProps as IProps } from "./Popup.d";
import { PopupBox, StyledButton, Text } from "./Popup.style";
import { popupData } from "./utils/popupData";
import useSetPopupOpenOnInterval from "./utils/useSetPopupOpenOnInterval";

export function Popup({ trigger, setIsAlarm, borderColor }: IProps) {
  const popupContents = useMemo(() => popupData, []);

  const [isOpen, setIsOpen] = useState(false);
  const { content, button, watchman } = popupContents[trigger];

  useSetPopupOpenOnInterval(popupContents[trigger], setIsOpen);

  function handleClick() {
    setIsOpen(false);
    if (setIsAlarm) setIsAlarm(false);
  }

  return (
    <>
      {isOpen && (
        <PopupBox borderColor={borderColor}>
          <Text>{content}</Text>
          <Image
            src={`/images/watchman-${watchman}.gif`}
            height={256}
            width={192}
            alt={`A very ${watchman} watchman`}
          />
          <StyledButton onClick={handleClick}>{button}</StyledButton>
        </PopupBox>
      )}
    </>
  );
}

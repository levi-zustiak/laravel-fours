import { Lobby } from '@/types/lobby.types';
import { Link } from 'inertia-solid';
import { onCleanup, onMount } from 'solid-js';
import { useLobby } from '@contexts/LobbyContext';
import { Card } from '@components/Card';
import { Icon } from '@components/Icon';
import { PageAnimation } from '@components/PageAnimation';
import {animate, stagger} from "motion";
import {Button} from "@components/Button";

type Props = {
  lobby: Lobby;
};

export default function Create({ lobby }: Props) {
  const { wait, unwait } = useLobby();

  const copyLink = () =>
    navigator.clipboard.writeText(
      // `${import.meta.env.VITE_APP_URL || ""}/lobby/join/${lobby.id}`,
      lobby.id,
    );

  onMount(() => {
      wait(lobby.id);

      animate(
          ".token",
          {
              transform: ["translateY(0)", "translateY(-16px)", "translateY(0)"],
          },
          {
              duration: 1,
              delay: stagger(0.1),
              repeat: Infinity,
          }
      )
  });

  onCleanup(() => unwait(lobby.id));

  return (
    <PageAnimation>
        <div style={{ display: "flex", "align-items": "flex-end"}}>
            <h2 style={{ "vertical-align": "text-bottom"}}>Waiting</h2>
            <div style={{ display: "flex", gap: "2px", "vertical-align": "text-bottom" }}>
                <svg class="token" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#F76D76"/>
                    <circle cx="8" cy="8" r="5.23077" stroke="#F55761" stroke-width="1.53846"/>
                </svg>
                <svg class="token" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#FFDC97"/>
                    <circle cx="8" cy="8" r="5.23077" stroke="#FFD179" stroke-width="1.53846"/>
                </svg>
                <svg class="token" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#F76D76"/>
                    <circle cx="8" cy="8" r="5.23077" stroke="#F55761" stroke-width="1.53846"/>
                </svg>
            </div>
        </div>
      <Link
        href={`/lobby/delete/${lobby.id}`}
        method="delete"
      >
          <Button>
             Cancel
          </Button>
      </Link>
        <Button onClick={copyLink}>Copy invite</Button>
    </PageAnimation>
  );
}

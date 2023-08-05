import Link from "next/link";
import Layout from "../components/LayoutTransition";

export default function Intro() {
  return (
    <Layout>
      <div className="intro">
        <h1>Tic Tac Toe</h1>

        <p>
          Le tic-tac-toe, aussi appelé « morpion » (par analogie avec le jeu de
          morpion) et « oxo » en Belgique, est un jeu de réflexion se pratiquant
          à deux joueurs, tour par tour, dont le but est de créer le premier un
          alignement. Le jeu se joue généralement en dessinant sur papier au
          crayon.
        </p>
        <h2>
          <Link href="/game" className="gameLink">
            Jouez maintenant !
          </Link>
        </h2>
      </div>
    </Layout>
  );
}

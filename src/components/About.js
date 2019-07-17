import React from "react";

export default function About() {
  return (
    <div className="about_section">
      <h1>About Conway's Game of Life</h1>
      <label>Introduction:</label>
      <p>
        The Game of Life, also known simply as Life, is a cellular automaton
        devised by the British mathematician John Horton Conway in 1970.[1] The
        game is a zero-player game, meaning that its evolution is determined by
        its initial state, requiring no further input. One interacts with the
        Game of Life by creating an initial configuration and observing how it
        evolves, or, for advanced players, by creating patterns with particular
        properties.
      </p>

      <label>Origins</label>
      <p>
        In late 1940, John von Neumann defined life as a creation (as a being or
        organism) which can reproduce itself and simulate a Turing machine. Von
        Neumann was thinking about an engineering solution which would use
        electromagnetic components floating randomly in liquid or gas. This
        turned out not to be realistic with the technology available at the
        time. Stanislaw Ulam invented cellular automata, which were intended to
        simulate von Neumann's theoretical electromagnetic constructions. Ulam
        discussed using computers to simulate his cellular automata in a
        two-dimensional lattice in several papers. In parallel, Von Neumann
        attempted to construct Ulam's cellular automaton. Although successful,
        he was busy with other projects and left some details unfinished. His
        construction was complicated because it tried to simulate his own
        engineering design. Over time, simpler life constructions were provided
        by other researchers, and published in papers and books.
      </p>

      <p>
        Motivated by questions in mathematical logic and in part by work on
        simulation games by Ulam, among others, John Conway began doing
        experiments in 1968 with a variety of different 2D cellular automaton
        rules.[3] Conway's initial goal was to define an interesting and
        unpredictable cell automaton. Thus, he wanted some configurations to
        last for a long time before dying, other configurations to go on forever
        without allowing cycles, etc. It was a significant challenge and an open
        problem for years before experts on cell automatons managed to prove
        that, indeed, Conway's Game of Life admitted of a configuration which
        was alive in the sense of satisfying Von Neumann's two general
        requirements. While the definitions before Conway's Life were
        proof-oriented, Conway's construction aimed at simplicity without a
        priori providing proof the automaton was alive.
      </p>

      <p>
        Conway chose his rules carefully, after considerable experimentation, to
        meet these criteria:
        <br />
        There should be no explosive growth.
        <br />
        There should exist small initial patterns with chaotic, unpredictable
        outcomes. <br />
        There should be potential for von Neumann universal constructors.
        <br />
        The rules should be as simple as possible, whilst adhering to the above
        constraints.
      </p>

      <p>
        The game made its first public appearance in the October 1970 issue of
        Scientific American, in Martin Gardner's "Mathematical Games" column.
        Theoretically, Conway's Life has the power of a universal Turing
        machine: anything that can be computed algorithmically can be computed
        within Life. Gardner wrote, "Because of Life's analogies with the rise,
        fall and alterations of a society of living organisms, it belongs to a
        growing class of what are called 'simulation games' (games that resemble
        real life processes)."
      </p>

      <p>
        Since its publication, Conway's Game of Life has attracted much
        interest, because of the surprising ways in which the patterns can
        evolve. Life provides an example of emergence and self-organization.
        Scholars in various fields, such as computer science, physics, biology,
        biochemistry, economics, mathematics, philosophy, and generative
        sciences have made use of the way that complex patterns can emerge from
        the implementation of the game's simple rules. The game can also serve
        as a didactic analogy, used to convey the somewhat counter-intuitive
        notion that design and organization can spontaneously emerge in the
        absence of a designer. For example, cognitive scientist Daniel Dennett
        has used the analogy of Conway's Life "universe" extensively to
        illustrate the possible evolution of complex philosophical constructs,
        such as consciousness and free will, from the relatively simple set of
        deterministic physical laws, which might govern our universe.
      </p>

      <p>
        The popularity of Conway's Game of Life was helped by its coming into
        being just in time for a new generation of inexpensive computer access
        which was being released into the market. The game could be run for
        hours on these machines, which would otherwise have remained unused at
        night. In this respect, it foreshadowed the later popularity of
        computer-generated fractals. For many, Life was simply a programming
        challenge: a fun way to use otherwise wasted CPU cycles. For some,
        however, Life had more philosophical connotations. It developed a cult
        following through the 1970s and beyond; current developments have gone
        so far as to create theoretic emulations of computer systems within the
        confines of a Life board.
      </p>


    <h1>For more information on Conway's Game of Life check out the Wikipedia Page: <a target="_blank" rel="noreferrer noopener" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">here</a></h1>
    </div>
  );
}

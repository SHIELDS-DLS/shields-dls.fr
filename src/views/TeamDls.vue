<template>
  <div class="mx-auto lg:p-8 p-4">
    <div id="description" class="mb-20">
      <img
        src="/images/team_dls.png"
        alt="Team DLS Logo"
        class="h-44 mx-auto mb-8"
      />
      <p class="text-xl lg:text-justify">
        La <strong>TEAM DLS</strong>, c’est un groupe d’étudiants passionnés de
        cybersécurité au sein de <strong>SHIELDS</strong>. On adore relever des
        défis, surtout quand il s'agit de <strong>CTF</strong> (Capture The
        Flag) ! Ces compétitions nous permettent de tester notre ingéniosité et
        notre logique tout en nous amusant.
      </p>
    </div>

    <div id="competitions" class="mb-28 pb-20">
      <h1 class="text-4xl font-bold text-center mb-10">Compétitions</h1>
      <p class="text-lg lg:text-justify mb-10">
        La <strong>TEAM DLS</strong> participe chaque année à de nombreuses
        compétitions réputées, telles que le <strong>BreizhCTF</strong>,
        l'<strong>ECW</strong>, l'<strong>EC2</strong>/le <strong>FIC</strong>,
        <strong>LeHack</strong>, <strong>TRACS</strong>,
        <strong>HACKLANTIQUE</strong> ou encore <strong>DGHACK</strong>. Chacune
        de ces compétitions est une nouvelle aventure qui met notre esprit
        d’équipe et nos compétences à l’épreuve. Nous avons l’opportunité
        d’apprendre, de partager des expériences et de nous mesurer à d’autres
        passionnés de cybersécurité, tout en portant fièrement les couleurs de
        notre filière.
      </p>
      <div>
        <img
          src="/images/team-dls/breizh2023-face.jpg"
          alt="BreizhCTF 2023"
          class="w-11/12 pb-4 pt-10 mx-auto"
        />
        <p class="text-center text-sm text-shields-txt-secondary mt-2">
          BreizhCTF 2023
        </p>
      </div>
      <div>
        <img
          src="/images/team-dls/ec2-2023-1.jpg"
          alt="EC2 2023"
          class="w-11/12 pb-4 pt-10 mx-auto"
        />
        <p class="text-center text-sm text-shields-txt-secondary mt-2">
          EC2 2023
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamDls",
};
</script>

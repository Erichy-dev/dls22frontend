<template>
  <main class="flex flex-col">
    <section
      class="self-center bg-gray-400 bg-opacity-70 p-6 text-black space-y-10 lg:mx-10"
    >
      <h1 class="font-extrabold md:text-2xl">TERMS AND CONDITIONS</h1>
      <section>
        <h2 class="font-bold mb-4">PROCEDURE</h2>
        <ol class="list-decimal text-lg space-y-4">
          <ol class="list-decimal">
            <h3 class="font-semibold">BEFORE MATCH</h3>
            <li>
              <router-link
                to="/signUp"
                class="hover:underline decoration-2 decoration-red-600 text-blue-900"
                >Create an account</router-link
              >
              or
              <router-link
                to="/signIn"
                class="hover:underline decoration-2 decoration-red-600 text-blue-900"
                >sign in.</router-link
              >
            </li>
            <li>
              <router-link
                to="/games"
                class="hover:underline decoration-2 decoration-red-600 text-blue-900"
                >Register</router-link
              >
              for both the league and cup.
            </li>
          </ol>
          <ol class="list-decimal">
            <h3 class="font-semibold">DURING MATCH</h3>
            <li>
              Log into DLS22 and click Exhibition
              <img src="/media/step1.png" alt="step1" class="w-4/12" />
            </li>
            <li>
              Click Friendly Match.
              <img src="/media/step2.png" alt="step1" class="w-4/12" />
            </li>
            <li>
              Copy and paste the match code.
              <img src="/media/step3.png" alt="step1" class="w-4/12" />
              <span class="italic font-medium"
                >(The code must be the exact code being used by your team
                mate.)</span
              >
            </li>
            <li>
              <strong>
                <span class="font-extrabold">NETWORK ISSUES.</span><br />
                <span class="italic font-medium"
                  >Please make sure you have a stable network connection before
                  starting the match. <span class="font-bold">Test</span> the
                  network by playing a
                  <span class="font-bold">live match</span></span
                >
              </strong>
              <img
                src="/media/live.png"
                alt="DLS22 ONLINE COMPETITIONS LIVE"
                class="w-4/12"
              />
            </li>
          </ol>
          <ol class="list-decimal">
            <h3 class="font-semibold">AFTER MATCH</h3>
            <li>
              Both teams must screenshot their results and send them to the
              whatsapp group as evidence.
            </li>
            <li>
              If there are more than 10 participants, the spoils shall be shared
              among the first three in the ratio 7/10, 2/10 and 1/10
            </li>
            <li>
              If the participants are equal to or less than 10, only the first
              shall recieve the spoils.
            </li>
            <li>
              The amount to be contributed by the participants will be set
              before each competition.
            </li>
          </ol>
        </ol>
      </section>
      <section>
        <h2 class="font-bold">BETS RULES</h2>
        <ol class="list-decimal text-lg">
          <li>Send the agreed amount via MPESA to 0795829177</li>
          <li>
            Make sure the name that appears is
            <span class="font-extrabold">ERIC NYAGA GITONGA</span>
          </li>
          <li>
            The amount will reflect in
            <router-link
              class="hover:underline decoration-2 decoration-red-600 text-blue-900"
              to="/bets"
            >
              BETS</router-link
            >
          </li>
          <li>
            The participant cannot retrieve his money once the competition
            starts unless he wins according to the terms and conditions.
          </li>
        </ol>
      </section>
      <section>
        <h2 class="font-bold">RULES</h2>
        <ol class="list-decimal text-lg">
          <li>
            Teams cannot change their
            <span class="font-bold"
              >team name, email, phone number and password</span
            >
            directly from the website. In such a case please
            <span
              class="text-blue-900 hover:underline decoration-2 decoration-red-600"
              href="mailto:erichnyaga1@gmail.com"
              >email us</span
            >.
          </li>
          <li>
            Participants must follow the terms and conditions to the latter
          </li>
        </ol>
      </section>
    </section>
  </main>
</template>

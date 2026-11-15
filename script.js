"use strict";

const technique478 = document.getElementById("technique478");
const techniqueSquare = document.getElementById("techniqueSquare");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const circle = document.getElementById("circle");
const instructions = document.getElementById("instructions");
const timer = document.getElementById("timer");
const notice = document.getElementById("notice");
const container = document.querySelector(".container");

const colors = {
    inhale: "#9f7aea",
    hold: "#805ad5",
    exhale: "#d6bcfa"
};

// Her aşama: süre (saniye), ekrandaki metin, renk ve dairenin başlangıç/bitiş ölçeği.
const exercises = {
    technique478: [
        { seconds: 4, label: "✨ Nefes Al", color: colors.inhale, from: 1, to: 1.6 },
        { seconds: 7, label: "⏸️ Nefesini Tut", color: colors.hold, from: 1.6, to: 1.6 },
        { seconds: 8, label: "🌀 Nefes Ver", color: colors.exhale, from: 1.6, to: 1 }
    ],
    techniqueSquare: [
        { seconds: 4, label: "✨ Nefes Al", color: colors.inhale, from: 1, to: 1.6 },
        { seconds: 4, label: "⏸️ Nefesini Tut", color: colors.hold, from: 1.6, to: 1.6 },
        { seconds: 4, label: "🌀 Nefes Ver", color: colors.exhale, from: 1.6, to: 1 },
        { seconds: 4, label: "⏸️ Bekle", color: colors.hold, from: 1, to: 1 }
    ]
};

let frameId = null;
let activeSteps = null;
let exerciseStart = 0;
let lastPhaseIndex = -1;
const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)");

function startBreathExercise(steps, selectedButton) {
    // Eski animasyon döngüsünü durdurarak mod değişiminde çakışmayı engeller.
    if (frameId !== null) cancelAnimationFrame(frameId);
    frameId = null;
    activeSteps = steps;
    exerciseStart = performance.now();
    lastPhaseIndex = -1;
    notice.textContent = "";

    technique478.setAttribute("aria-pressed", String(selectedButton === technique478));
    techniqueSquare.setAttribute("aria-pressed", String(selectedButton === techniqueSquare));
    renderFrame(exerciseStart);
}

function renderFrame(now) {
    if (!activeSteps) return;

    const totalSeconds = activeSteps.reduce((total, step) => total + step.seconds, 0);
    const positionSeconds = ((now - exerciseStart) / 1000) % totalSeconds;
    let phaseElapsed = positionSeconds;
    let phaseIndex = 0;

    // Saniyeleri performans saatinden hesaplar; arka plan sekme yavaşlamalarında
    // setInterval birikmesi ve geri sayım kayması oluşmaz.
    while (phaseElapsed >= activeSteps[phaseIndex].seconds && phaseIndex < activeSteps.length - 1) {
        phaseElapsed -= activeSteps[phaseIndex].seconds;
        phaseIndex++;
    }

    const phase = activeSteps[phaseIndex];
    if (phaseIndex !== lastPhaseIndex) {
        instructions.textContent = phase.label;
        circle.style.backgroundColor = phase.color;
        lastPhaseIndex = phaseIndex;
    }

    const remaining = Math.max(1, Math.ceil(phase.seconds - phaseElapsed));
    timer.textContent = `${remaining}s`;
    const progress = Math.min(1, phaseElapsed / phase.seconds);
    const scale = reduceMotion?.matches ? 1 : phase.from + (phase.to - phase.from) * progress;
    circle.style.transform = `scale(${scale})`;

    frameId = requestAnimationFrame(renderFrame);
}

technique478.addEventListener("click", () => startBreathExercise(exercises.technique478, technique478));
techniqueSquare.addEventListener("click", () => startBreathExercise(exercises.techniqueSquare, techniqueSquare));

// Fullscreen durumunu yalnızca tarayıcı gerçekten değiştiğinde günceller.
fullscreenBtn.addEventListener("click", toggleFullscreen);

async function toggleFullscreen() {
    notice.textContent = "";
    try {
        if (document.fullscreenElement) {
            await document.exitFullscreen();
        } else if (document.documentElement.requestFullscreen) {
            await document.documentElement.requestFullscreen();
        } else {
            notice.textContent = "Tam ekran modu bu tarayıcıda desteklenmiyor.";
        }
    } catch (_error) {
        notice.textContent = "Tam ekran açılamadı. Tarayıcı izinlerini kontrol edin.";
    }
}

function createExitButton() {
    if (document.getElementById("exitFullscreen")) return;
    const exitBtn = document.createElement("button");
    exitBtn.id = "exitFullscreen";
    exitBtn.type = "button";
    exitBtn.textContent = "Tam ekrandan çık";
    exitBtn.addEventListener("click", () => {
        document.exitFullscreen().catch(() => {
            notice.textContent = "Tam ekrandan çıkılamadı; Esc tuşunu deneyin.";
        });
    });
    container.appendChild(exitBtn);
}

document.addEventListener("fullscreenchange", () => {
    const isFullscreen = Boolean(document.fullscreenElement);
    document.body.classList.toggle("fullscreen", isFullscreen);
    if (isFullscreen) {
        createExitButton();
    } else {
        document.getElementById("exitFullscreen")?.remove();
    }
});

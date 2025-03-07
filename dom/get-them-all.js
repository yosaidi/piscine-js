export const getArchitects = () => {
    const architects = Array.from(document.getElementsByTagName("a"));
    const nonArchitects = Array.from(document.querySelectorAll(":not(a)"));
    return [architects, nonArchitects];
};

export const getClassical = () => {
    const classical = Array.from(document.getElementsByClassName("classical"));
    const nonClassical = Array.from(document.querySelectorAll("a:not(.classical)"));
    return [classical, nonClassical];
};

export const getActive = () => {
    const activeClassical = Array.from(document.querySelectorAll(".classical.active"));
    const nonActiveClassical = Array.from(document.querySelectorAll(".classical:not(.active)"));
    return [activeClassical, nonActiveClassical];
};

export const getBonannoPisano = () => {
    const bonanno = document.getElementById("BonannoPisano");
    const activeClassical = Array.from(document.querySelectorAll(".classical.active"));
    const remainingActive = activeClassical.filter(el => el.id !== "BonannoPisano");
    return [bonanno, remainingActive];
};

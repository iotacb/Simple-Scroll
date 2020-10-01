const targetElements = document.querySelectorAll("*[ss-target]");

window.onscroll = (s) => {
  const yOffset = s.path[1].pageYOffset;
  for (let i = 0; i < targetElements.length; i++) {
    const target = targetElements[i];

    const inClass = target.getAttribute("ss-in") || "ss-fade-in";
    const outClass = target.getAttribute("ss-out") || "ss-fade-out";
    const delay = target.getAttribute("ss-delay") || 0;
    const checkObject = document.querySelector(
      target.getAttribute("ss-object")
    );
    const triggerPosition = target.getAttribute("ss-scroll-position");
    const keyFrame = target.getAttribute("ss-scroll-anim");

    if (keyFrame != null && keyFrame != undefined) {
      const keyFramePars = keyFrame.split(",");

      const styleOption = keyFramePars[0].toString();

      const startOptions = keyFramePars[1].trim();
      const startY = parseInt(startOptions.split(" ")[0].trim());
      const startStyle = parseInt(startOptions.split(" ")[1].trim());

      const endOptions = keyFramePars[2].trim();
      const endY = parseInt(endOptions.split(" ")[0].trim());
      const endStyle = parseInt(endOptions.split(" ")[1].trim());

      const value = clamp(
        (yOffset + (yOffset - startY)) / endY,
        startStyle,
        endStyle
      );

      const style = styleOption.includes("$")
        ? `${styleOption}`.replaceAll("$", value)
        : `${styleOption}: ${value}`;
      target.style = style;
    } else {
      if (triggerPosition == undefined || triggerPosition == null) {
        if (isElementInViewport(target, checkObject)) {
          targetIn(target, inClass, outClass, delay);
        } else {
          targetOut(target, inClass, outClass, delay);
        }
      } else {
        const y = parseInt(triggerPosition);
        if (y <= yOffset) {
          targetIn(target, inClass, outClass, delay);
        } else {
          targetOut(target, inClass, outClass, delay);
        }
      }
    }
  }
};

function sign(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
}

function clamp(num, min, max) {
  return num > max ? max : num < min ? min : num;
}

function isElementInViewport(e, e2) {
  const rect = e.getBoundingClientRect();
  if (e2 == null || e2 == undefined) {
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  } else {
    const rect2 = e2.getBoundingClientRect();
    return (
      rect.top >= rect2.top &&
      rect.left >= rect2.left &&
      rect.bottom <= rect2.bottom
    );
  }
}

function targetIn(target, inClass, outClass, delay) {
  setTimeout(() => {
    if (!target.classList.contains(inClass)) {
      target.classList.add(inClass);
    }
    if (target.classList.contains(outClass)) {
      target.classList.remove(outClass);
    }
  }, delay);
}

function targetOut(target, inClass, outClass, delay) {
  setTimeout(() => {
    if (!target.classList.contains(outClass)) {
      target.classList.add(outClass);
    }
    if (target.classList.contains(inClass)) {
      target.classList.remove(inClass);
    }
  }, delay);
}

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

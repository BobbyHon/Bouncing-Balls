function bouncingBall(h,  bounce,  window) {
    if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
    let answer = 0
    while (h > window){
      ++answer
      h = h * bounce
      if (h > window) ++answer
    }
    return answer
  }
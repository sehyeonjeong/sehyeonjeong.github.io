import { useEffect, useRef } from 'react'

export default function usePointerParallax(maxOffset = 16) {
  const targetRef = useRef(null)

  useEffect(() => {
    const target = targetRef.current
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!target || !finePointer.matches || reducedMotion.matches) return undefined

    let frameId = null
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const render = () => {
      currentX += (targetX - currentX) * 0.1
      currentY += (targetY - currentY) * 0.1

      target.style.setProperty('--hero-parallax-x', `${currentX.toFixed(2)}px`)
      target.style.setProperty('--hero-parallax-y', `${currentY.toFixed(2)}px`)

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        frameId = window.requestAnimationFrame(render)
      } else {
        currentX = targetX
        currentY = targetY
        frameId = null
      }
    }

    const requestRender = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(render)
    }

    const handlePointerMove = (event) => {
      const bounds = target.getBoundingClientRect()
      const pointerX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1
      const pointerY = ((event.clientY - bounds.top) / bounds.height) * 2 - 1

      targetX = -pointerX * maxOffset
      targetY = -pointerY * maxOffset
      requestRender()
    }

    const handlePointerLeave = () => {
      targetX = 0
      targetY = 0
      requestRender()
    }

    target.addEventListener('pointermove', handlePointerMove, { passive: true })
    target.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      target.removeEventListener('pointermove', handlePointerMove)
      target.removeEventListener('pointerleave', handlePointerLeave)
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      target.style.removeProperty('--hero-parallax-x')
      target.style.removeProperty('--hero-parallax-y')
    }
  }, [maxOffset])

  return targetRef
}

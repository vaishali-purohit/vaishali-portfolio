"use client"

import { useId } from "react"
import { motion } from "framer-motion"

const SLOT_HEIGHT = 108
const BOX_HEIGHT = 60
const BOX_WIDTH = 236
const VIEW_WIDTH = 280
const CENTER_X = VIEW_WIDTH / 2

export function ArchitectureDiagram({ nodes }: { nodes: string[] }) {
  const uid = useId()
  const height = nodes.length * SLOT_HEIGHT

  const boxTop = (i: number) => i * SLOT_HEIGHT + (SLOT_HEIGHT - BOX_HEIGHT) / 2
  const boxBottom = (i: number) => boxTop(i) + BOX_HEIGHT

  return (
    <svg
      viewBox={`0 0 ${VIEW_WIDTH} ${height}`}
      width="100%"
      height={height}
      role="img"
      aria-label={`Architecture flow: ${nodes.join(" → ")}`}
      className="overflow-visible"
    >
      <defs>
        <marker
          id={`${uid}-arrow`}
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="var(--color-accent)" />
        </marker>
      </defs>

      {nodes.slice(0, -1).map((_, i) => (
        <motion.path
          key={`edge-${i}`}
          d={`M${CENTER_X},${boxBottom(i)} L${CENTER_X},${boxTop(i + 1) - 8}`}
          stroke="var(--color-accent)"
          strokeWidth={2}
          fill="none"
          markerEnd={`url(#${uid}-arrow)`}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.4, delay: i * 0.3 + 0.15, ease: "easeInOut" }}
        />
      ))}

      {nodes.map((label, i) => (
        <motion.g
          key={`node-${label}`}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{
            duration: 0.3,
            delay: i === 0 ? 0 : i * 0.3,
            ease: "easeOut",
          }}
        >
          <foreignObject
            x={(VIEW_WIDTH - BOX_WIDTH) / 2}
            y={boxTop(i)}
            width={BOX_WIDTH}
            height={BOX_HEIGHT}
          >
            <div className="flex h-full w-full items-center justify-center rounded-lg border border-border bg-card px-3 text-center">
              <span className="font-mono text-[11px] leading-snug text-card-foreground">
                {label}
              </span>
            </div>
          </foreignObject>
        </motion.g>
      ))}
    </svg>
  )
}

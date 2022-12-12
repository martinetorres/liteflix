import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

type Direction = 'up' | 'down' | 'left' | 'right';

export default function Slide({ children, direction, delay } : { children: React.ReactNode, direction: Direction, delay?: number }) {
    
    const MotionBox = motion(chakra.div);

    let dirX = [0, 0]; 
    let dirY = [0, 0];
    switch (direction) {
        case 'left': 
            dirX = [100, 0];
            break;
        case 'right': 
            dirX = [-100, 0];
            break;
        case 'down':
            dirY = [-100, 0];
            break;
        case 'up':
            dirY = [100, 0];
            break
    }

    return( 
        <MotionBox animate={{
            x: dirX,
            y: dirY,
            opacity: [0, 1],
        }}
        transition={{
            duration: 0.8,
            ease: "easeInOut",
            times: [0, 1],
            delay: delay,
        }}>

            { children }

        </MotionBox>
    )
}
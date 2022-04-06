import React, { useEffect } from 'react'

export const Hooks = () => {
    const [open, setOpen] = React.useState(false);
    // const []

    const click = () => {
        setOpen(!open)
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    // useEffect(() => {
    //     console.log(open)
    // }, [open])
    return { open, click, handleDrawerOpen, handleDrawerClose }
}

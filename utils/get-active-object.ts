import { useState, useEffect } from 'react';
import { FabricJSEditor } from 'fabricjs-react'

const useActiveObject = (editor: FabricJSEditor | null) => {
    const [activeObject, setActiveObject] = useState<fabric.Object | null>(null);

    useEffect(() => {
        if (editor && editor.canvas) {
            const object = editor.canvas.getActiveObject() as fabric.Object
            if (object) {
                setActiveObject(object)
            }
        } else {
            console.error("Editor or canvas not available in useActiveObject.")
        }
    }, [editor]);

    return activeObject;
};

export default useActiveObject;

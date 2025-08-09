export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log("Received data:", req.body);

    } catch (error) {

    }
}
export const getAllTask = async (req, res) => { }
export const showTask = async (req, res) => { }
export const updateTask = async (req, res) => { }
export const deleteTask = async (req, res) => { }
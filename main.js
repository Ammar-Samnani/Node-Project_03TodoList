import inquirer from "inquirer";
let list_of_todo = [];
async function add_todo() {
    const item_to_add = await inquirer.prompt([
        {
            name: "item_by_user",
            type: "input",
            message: "Type your Todo: "
        }
    ]);
    let item = item_to_add.item_by_user;
    list_of_todo.push(".) " + item);
    // console.log(list_of_todo)
}
async function remove_todo() {
    const item_to_remove = await inquirer.prompt([
        {
            name: "index_item",
            type: "number",
            message: "Type todo item number: "
        }
    ]);
    let index_of_item_remove = item_to_remove.index_item - 1;
    list_of_todo.splice(index_of_item_remove, 1);
    // console.log(list_of_todo)
}
let should_continue = true;
function to_print_todo() {
    let list = list_of_todo.join("\n");
    return (list);
}
async function main() {
    while (should_continue) {
        const operation = await inquirer.prompt([
            {
                name: "Operation",
                type: "list",
                message: "Select an Operation",
                choices: ["Add Todo", "Remove Todo", "Exit"]
            }
        ]);
        if (operation.Operation === "Add Todo") {
            await add_todo();
            console.log(to_print_todo());
        }
        else if (operation.Operation === "Remove Todo") {
            await remove_todo();
            console.log(to_print_todo());
        }
        else {
            should_continue = false;
        }
    }
}
main();

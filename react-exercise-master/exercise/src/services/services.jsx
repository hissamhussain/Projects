class UserService{

    users = []
    isSet = false

    set setUsers(arr)
    {
        this.users = arr
        this.isSet = true
    }

    get getUsers()
    {
        return this.users
    }

}

export default new UserService();
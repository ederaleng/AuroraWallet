import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  iconChain: {
    width: 35,
    height: 35
  },
  containerChain: {
    margin: 15,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  containerNameChain: {
    fontSize: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  containerAccount: {
    margin: 10,
    marginBottom: 0,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#D4D4D5",
    flex: 1,
    flexDirection: "row"
  },
  iconAccount: {
    width: 40,
    height: 40,
    borderRadius: 40/2,
    display: "flex"
  },
  viewNameAccount: {
    flex: 1,
    color: "#212529",
    fontWeight: "bold"
  },
  emptyAccounts: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#D5D5D5",
    marginBottom: 0,
    paddingVertical: 15,
    borderColor: "#D5D5D5",
    borderRadius: 10/2,
    borderWidth: 1
  }
})
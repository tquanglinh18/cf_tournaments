const useSearchPlayer = (
  playersList: any,
  nameField: string,
  forteFiled: string
) => {
  const playerFilter: any = playersList.filter(
    (item: any, nameField: string, forteFiled: string) => {
      return search(nameField, forteFiled, item);
    }
  );
  return playerFilter;
};

function search(name: string, forte: string, item: any) {
  if (
    item.name.toLowerCase().includes(name.toLocaleLowerCase()) &&
    item.forte.toLowerCase().includes(forte.toLocaleLowerCase())
  ) {
    return item;
  }
}

export default useSearchPlayer;

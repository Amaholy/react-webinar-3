/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = {
      list: [],
    }
    this.state.list = initState.list.map((item) => ({
      ...item,
      selectionCount: 0,
    }))
    this.listeners = [] // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener)
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter((item) => item !== listener)
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener()
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    const newItem = {
      code: this.generateUniqueCode(),
      title: 'Новая запись',
    }
    this.setState({
      ...this.state,
      list: [...this.state.list, newItem],
    })
  }

  /**
   * Генерация уникального кода
   * @returns {number}
   */

  generateUniqueCode() {
    this.codeCounter = (this.codeCounter || 0) + 1
    return this.codeCounter
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter((item) => item.code !== code),
    })
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map((item) => {
        if (item.code === code) {
          item.selected = !item.selected
          item.selectionCount += item.selected ? 1 : 0
        } else {
          // Удаление выделение записи
          item.selected = false
        }
        return item
      }),
    })
  }
}

export default Store

import React, {useContext} from "react";
import styles from './style.module.scss'
import {motion, AnimatePresence} from 'framer-motion'
import {Card} from "./card";
import {ExpandCard} from "./ExpandCard";
import {CursorImageContext} from "../../pages/_app";

const bots = [
  {
    id: 1,
    name: 'Экономика',
    price: '2000₽-6000₽',
    options: ['Дуэли', 'Магазин', 'Личные роли', 'Лав румы', 'Кейсы', 'Инвентарь', 'Транзакции', 'Настройка сервера по командам (роли, каналы, конфиг)', 'Кланы']
  },
  {
    id: 2,
    name: 'Модерация',
    price: '1000₽-3000₽',
    options: ['История никнеймов/наказаний', 'Предупреждения', 'Муты', 'Баны', 'Неограниченное время нарушения', 'Профиль']
  },
  {
    id: 3,
    name: 'Верификация',
    price: '500₽',
    options: ['Удаление/Добавление гендерной роли', 'Оценка верификатора', 'Дефолтная роль на сервере', 'Массовая верификация']
  },
  {
    id: 4,
    name: 'Anti-Raid',
    price: '500₽',
    options: ['Лимит пользователей за заданный промежуток времени', 'Личные сообщения с нарушением', 'Канал с логами']
  }, // 350 lines
  {
    id: 5,
    name: 'Anti-Crash',
    price: '700₽',
    options: ['Логи', 'Лимит нарушений за заданный промежуток времени', 'Отслеживание действий с ролями, каналами, киками, банами, прикреплением сообщений']
  }, // 551 lines
  {
    id: 6,
    name: 'Ивенты',
    price: '1000₽',
    options: ['Кастомная мафия: регистрация на мероприятие, распределение игровых ролей, отправка личных сообщений с ролями ведущему и участникам, голосование', 'Добавление/Удаление ивента', 'Добавление вебхука (приглашения на мероприятие) через чат сервера', 'Профиль ивентера', 'Создание каналов', 'Ивент бан']
  }, // 1989 lines
  {
    id: 7,
    name: 'Клозы',
    price: '1200₽',
    options: ['CS:GO /Brawl Stars /Dota 2 /Valorant /League of Legends /Custom close', 'Клоз бан', 'Admin Commands', 'Close 5x5', 'Запись в команду']
  }, // 1989 lines
  {
    id: 8,
    name: 'Набор в стафф',
    price: '600₽',
    options: ['Логи', 'Добавление ролей и вебхуков', 'Модальное окно с вопросами']
  }, // 487 lines
  {
    id: 9,
    name: 'Кланы',
    price: '1000₽',
    options: ['Клановый чат', 'Клановый магазин с баннерами для кланового профиля', 'Клановый профиль', 'Пополнение клана', 'Топ кланов', 'Топ участников клана', 'Управление участником клана', 'Клановй ассистент', 'Приглашения в клан']
  },
  {
    id: 10,
    name: 'Приватные комнаты',
    price: '500₽',
    options: ['Управлние комнатой по кнопкам']
  },
  {
    id: 11,
    name: 'Anti-Spam',
    price: '500₽',
    options: ['Логи', 'Удаление сообщений/вебхуков с приглашениями на сервера, упоминанием @everyone']
  }, // 551 lines
];

export const BotCards = ({setSelectedId, selectedId}) => {
  const {scrollY} = useContext(CursorImageContext)

  return <div className={styles.box}>
    {bots.map((item, id) =>
      <Card key={id} item={item} onClick={setSelectedId} />
    )}
    <AnimatePresence>
      {selectedId !== null && (
        <motion.div
          className={styles['expand-wrapper']}
          animate={{
            y: scrollY - 100,
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}>
          <ExpandCard
            item={bots[selectedId - 1]}
            selectedId={selectedId}
            onClick={setSelectedId}
          />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
}
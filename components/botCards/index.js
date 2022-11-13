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
    options: ['Дуэли', 'Магазин', 'Личные роли', 'Лав румы', 'Кейсы', 'Инвентарь', 'Транзакции', 'Настройка сервера по командам (роли, каналы, конфиг)', 'Кланы'],
    color: '#023e8a'
  },
  {
    id: 2,
    name: 'Модерация',
    price: '1000₽-3000₽',
    options: ['История никнеймов/наказаний', 'Предупреждения', 'Муты', 'Баны', 'Неограниченное время нарушения', 'Профиль'],
    color: '#023e8a'
  },
  {
    id: 3,
    name: 'Верификация',
    price: '500₽',
    options: ['Удаление/Добавление гендерной роли', 'Оценка верификатора', 'Дефолтная роль на сервере', 'Массовая верификация'],
    color: '#023e8a'
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
    options: ['Кастомная мафия: регистрация на мероприятие, распределение игровых ролей, отправка личных сообщений с ролями ведущему и участникам, голосование', 'Добавление/Удаление ивента', 'Добавление вебхука (приглашения на мероприятие) через чат сервера', 'Профиль ивентера', 'Создание каналов', 'Ивент бан'],
    color: '#023e8a'
  }, // 1989 lines
  {
    id: 7,
    name: 'Клозы',
    price: '1200₽',
    options: ['CS:GO /Brawl Stars /Dota 2 /Valorant /League of Legends /Custom close', 'Клоз бан', 'Admin Commands', 'Close 5x5', 'Запись в команду'],
    color: '#023e8a'
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
    options: ['Клановый чат', 'Клановый магазин с баннерами для кланового профиля', 'Клановый профиль', 'Пополнение клана', 'Топ кланов', 'Топ участников клана', 'Управление участником клана', 'Клановй ассистент', 'Приглашения в клан'],
    color: '#0077b6'
  },
  {
    id: 10,
    name: 'Приватные комнаты',
    price: '750₽',
    options: ['Управлние комнатой по кнопкам'],
    color: '#0077b6'
  },
  {
    id: 11,
    name: 'Anti-Spam',
    price: '500₽',
    options: ['Логи', 'Удаление сообщений/вебхуков с приглашениями на сервера, упоминанием @everyone']
  }, // 551 lines
  {
    id: 12,
    name: 'Full Bot',
    price: '8000₽',
    options: [
      'Возможность добавления на несколько серверов',
      'Полная настройка по слэш-командам без перезагрузки бота',
      'Бот включает в себя весь функционал с остальных ботов'
    ],
    color: '#023e8a'
  },
  {
    id: 13,
    name: 'Исходники Full Bot',
    price: '43000₽',
    options: [
      'Продуманная структура проекта и интуитивно понятный код',
      'Долгосрочная помощь разработчика',
      'Один бот — много серверов',
      'Доступ к репозиторию проекта на GitHub дает возможность получения свежей версии бота',
      'Регулярное обновление функционала и обновление версии репозитория',
      'Объяснение и помощь по настройке',
      'Стэк discord.js, sequelize, postgresql, json-db, napi-rs/canvas, gif-encoder, moment, ms',
      '20k+ строк кода',
      '286x+ файлов с кодом'
    ],
    color: '#03045e'
  },
  {
    id: 14,
    name: 'png/gif баннер',
    price: '500-1500₽',
    options: [
      '500₽ простой баннер со статистикой онлайна',
      '1000₽ анимированный баннер',
      '1500₽ анимированный баннер с анимацией текста'
    ],
    color: '#023e8a'
  }, // 1989 lines
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
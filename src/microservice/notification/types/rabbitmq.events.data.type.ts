import { MicroservicesEventConstant } from '@share';
import type {
  AuthLoginDto,
  AuthRegistrationDto,
  CommentCreateDto,
  CommentDeleteDto,
  CommentEditDto,
  CommentNumberModerateDto,
  DonutSubscriptionExpiredDtoInterface,
  DonutSubscriptionIssuanceDtoInterface,
  DonutSubscriptionProlongedDtoInterface,
  NumberFindDto,
  NumberFindErrorDto,
  NumberOrganizationPinDto,
  OperatorCreateDtoInterface,
  OrganizationCreateDtoInterface,
  OrganizationCreateErrorDtoInterface,
  OrganizationUpdateDtoInterface,
  OrganizationUpdateErrorDtoInterface,
  UserAnotherFindNumberDtoInterface,
  UserCreateDtoInterface,
  UserUpdateDtoInterface,
} from '@microservice/notification/dto';

/**
 * @deprecated используйте RabbitMQNotificationEventKeys
 */
export type RabbitmqNotificationEventsKey = RabbitNotificationEventsKeys;

export type RabbitNotificationEventsKeys =
  keyof typeof MicroservicesEventConstant.notification;

/**
 * @deprecated используйте RabbitmqNotificationEventsDtoData
 */
export type RabbitmqNotificationEvents = RabbitmqNotificationEventsDtoData;

/*
 * События, которые принимает микросервис по работе с уведомлениями
 */
export type RabbitmqNotificationEventsDtoData = {
  /**
   * Авторизация пользователя в ВК
   */
  auth_login_user: AuthLoginDto;
  /**
   * Регистрация пользователя ВК
   */
  auth_register_user: AuthRegistrationDto;
  /**
   * Удаление комментария пользователем
   */
  comment_delete: CommentDeleteDto;
  /**
   * Создание комментария
   */
  comment_create: CommentCreateDto;
  /**
   * Создание комментария
   */
  comment_edit: CommentEditDto;
  /**
   * поиск номера
   */
  number_find: NumberFindDto;
  /**
   * Ошибка поиск номера.
   */
  number_find_error: NumberFindErrorDto;
  /**
   * Создание нового оператора автоматически системой в процессе поиска номеров
   */
  operator_create_auto: OperatorCreateDtoInterface;
  /**
   * Поиск номера телефона пользователя с привязанными номером и активированными уведомлениями
   */
  user_another_number_find: UserAnotherFindNumberDtoInterface;

  /**
   * Добавление организации
   */
  organization_create_system: OrganizationCreateDtoInterface;
  /**
   * Обновление информации об организации
   */
  organization_update_system: OrganizationUpdateDtoInterface;
  /**
   * Добавление организации
   */
  organization_create_system_error: OrganizationCreateErrorDtoInterface;
  /**
   * Обновление организации
   */
  organization_update_error: OrganizationUpdateErrorDtoInterface;
  /**
   * Прикрепление организации к номеру
   */
  number_organization_pin: NumberOrganizationPinDto;
  /**
   * Запуск сервиса АПИ
   */
  service_api_start: { date: number };
  /**
   * Остановка сервиса АПИ
   */
  service_api_stop: { date: number; signal: string };
  /**
   * Модерация комментария
   */
  comment_moderation_number: CommentNumberModerateDto;
  /**
   * Обратное уведомление об успешном Оформление подписки в сервисе
   */
  donut_subscriptionIssuance: DonutSubscriptionIssuanceDtoInterface;
  /**
   * Уведомление об успешном Продление подписки
   */
  donut_subscriptionProlonged: DonutSubscriptionProlongedDtoInterface;

  /**
   * Уведомление о выключение подписки
   */
  donut_subscriptionExpired: DonutSubscriptionExpiredDtoInterface;

  /**
   * Создание пользователя в системе автоматически
   */
  user_create: UserCreateDtoInterface;

  /**
   * Изменение пользователя
   */
  user_edit: UserUpdateDtoInterface;
};

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  description: string;
  progress: number;
  duration: string;
  level: string;
  category: string;
  enrolled: boolean;
}

interface LearningHistory {
  courseTitle: string;
  completedAt: string;
  score: number;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const courses: Course[] = [
    {
      id: 1,
      title: 'Основы веб-дизайна',
      description: 'Научитесь создавать красивые и функциональные интерфейсы',
      progress: 75,
      duration: '12 часов',
      level: 'Начальный',
      category: 'Дизайн',
      enrolled: true
    },
    {
      id: 2,
      title: 'React для начинающих',
      description: 'Погрузитесь в мир современной frontend разработки',
      progress: 45,
      duration: '18 часов',
      level: 'Средний',
      category: 'Программирование',
      enrolled: true
    },
    {
      id: 3,
      title: 'UX/UI тренды 2025',
      description: 'Изучите последние тренды в дизайне интерфейсов',
      progress: 0,
      duration: '8 часов',
      level: 'Продвинутый',
      category: 'Дизайн',
      enrolled: false
    },
    {
      id: 4,
      title: 'TypeScript Pro',
      description: 'Мастерство типизации и архитектуры приложений',
      progress: 0,
      duration: '24 часа',
      level: 'Продвинутый',
      category: 'Программирование',
      enrolled: false
    },
    {
      id: 5,
      title: 'Анимации в вебе',
      description: 'Создавайте плавные и захватывающие анимации',
      progress: 0,
      duration: '10 часов',
      level: 'Средний',
      category: 'Дизайн',
      enrolled: false
    },
    {
      id: 6,
      title: 'Figma для профи',
      description: 'Освойте продвинутые техники работы в Figma',
      progress: 0,
      duration: '15 часов',
      level: 'Средний',
      category: 'Дизайн',
      enrolled: false
    }
  ];

  const learningHistory: LearningHistory[] = [
    { courseTitle: 'HTML & CSS Основы', completedAt: '15 октября 2024', score: 95 },
    { courseTitle: 'JavaScript Базовый', completedAt: '28 сентября 2024', score: 88 },
    { courseTitle: 'Figma Старт', completedAt: '12 августа 2024', score: 92 }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начальный':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Средний':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Продвинутый':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="GraduationCap" size={24} className="text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EduSpace
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            <Button variant="ghost" className="hover-scale">
              <Icon name="Search" size={18} className="mr-2" />
              Поиск
            </Button>
            <Button variant="ghost" className="hover-scale">
              <Icon name="Bell" size={18} className="mr-2" />
              Уведомления
            </Button>
            <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-2 border-primary/30 hover-scale cursor-pointer">
              <Icon name="User" size={20} className="text-primary" />
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Обучение без границ
          </h2>
          <p className="text-xl text-muted-foreground">
            Развивайте навыки вместе с лучшими преподавателями
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="courses" className="text-base">
              <Icon name="BookOpen" size={18} className="mr-2" />
              Курсы
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-base">
              <Icon name="User" size={18} className="mr-2" />
              Профиль
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card
                  key={course.id}
                  className="group hover-scale bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden relative animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="outline" className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
                      {course.enrolled && (
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          Активный
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Tag" size={16} />
                        <span>{course.category}</span>
                      </div>
                    </div>

                    {course.enrolled ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Прогресс</span>
                          <span className="text-primary font-semibold">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <Button className="w-full mt-4 bg-primary hover:bg-primary/90 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
                          Продолжить обучение
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </div>
                    ) : (
                      <Button variant="outline" className="w-full mt-4 border-primary/30 hover:bg-primary/10">
                        <Icon name="Plus" size={16} className="mr-2" />
                        Записаться на курс
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="animate-fade-in">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center border-4 border-primary/20">
                      <Icon name="User" size={40} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-2">Студент EduSpace</CardTitle>
                      <CardDescription className="text-base">
                        Участник платформы с августа 2024
                      </CardDescription>
                      <div className="flex gap-4 mt-4">
                        <Badge variant="outline" className="text-base py-1 px-3 bg-primary/10 border-primary/30 text-primary">
                          <Icon name="Award" size={16} className="mr-2" />
                          3 курса завершено
                        </Badge>
                        <Badge variant="outline" className="text-base py-1 px-3 bg-accent/10 border-accent/30 text-accent-foreground">
                          <Icon name="Zap" size={16} className="mr-2" />
                          2 активных курса
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                    Статистика обучения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                      <div className="text-4xl font-bold text-primary mb-2">120</div>
                      <div className="text-muted-foreground">Часов обучения</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                      <div className="text-4xl font-bold text-accent-foreground mb-2">91%</div>
                      <div className="text-muted-foreground">Средний балл</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl border border-secondary/30">
                      <div className="text-4xl font-bold text-foreground mb-2">15</div>
                      <div className="text-muted-foreground">Сертификатов</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="History" size={24} className="text-primary" />
                    История обучения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {learningHistory.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors animate-scale-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                            <Icon name="CheckCircle2" size={24} className="text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{item.courseTitle}</h4>
                            <p className="text-sm text-muted-foreground">{item.completedAt}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-base py-1 px-3 bg-green-500/10 border-green-500/30 text-green-300">
                            <Icon name="Star" size={16} className="mr-1" />
                            {item.score}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Target" size={24} />
                    Текущие цели
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Завершить курс React</span>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Получить сертификат по дизайну</span>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border/50 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 EduSpace. Образовательная платформа будущего</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
